// components/Cocktail.jsx (updated with enhanced favorite functionality)
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../pages/firebase";
import { AuthContext } from './AuthContext';
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore"; 
import './Cocktail.css'

export default function Cocktail({ image, name, id, info, glass }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // Check if cocktail is already favorited when component mounts
  useEffect(() => {
    const checkIfFavorite = async () => {
      if (currentUser) {
        const favoritesRef = doc(db, 'favorites', currentUser.uid);
        const favoritesDoc = await getDoc(favoritesRef);
        
        if (favoritesDoc.exists() && favoritesDoc.data()[id]) {
          setIsFavorite(true);
        }
      }
    };
    
    checkIfFavorite();
  }, [currentUser, id]);

  const toggleFavorite = async () => {
    if (!currentUser) {
      alert("Please log in to save favorites!");
      return;
    }
    
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    
    try {
      await updateFavoriteInFirestore(id, newFavoriteState);
    } catch (error) {
      console.error("Error updating favorite:", error);
      setIsFavorite(!newFavoriteState); // Revert on error
    }
  };

  const updateFavoriteInFirestore = async (cocktailId, isFavorite) => {
    const favoritesRef = doc(db, 'favorites', currentUser.uid);
    const favoritesDoc = await getDoc(favoritesRef);

    if (!favoritesDoc.exists()) {
      await setDoc(favoritesRef, {});
    }

    await updateDoc(favoritesRef, {
      [cocktailId]: isFavorite
    });
  };

  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <div className="cocktail-actions">
          <button
            className={`btn-favorite ${isFavorite ? 'favorite' : ''}`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
          <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
            View Recipe
          </Link>
        </div>
      </div>
    </article>
  );
}