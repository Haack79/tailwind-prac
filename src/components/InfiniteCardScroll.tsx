import React, { useState, useEffect, useRef, useCallback } from "react";

const CardList = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastCardRef = useRef<HTMLDivElement | null>(null);

  const fetchMoreCards = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.example.com/cards"); // Replace with your API URL
      const newCards = await response.json();
      setCards((prevCards) => [...prevCards, ...newCards]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setLoading(false);
    }
  };

  const lastCardElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreCards();
        }
      }, {
        rootMargin: '0px 0px 20% 0px' // Trigger when the last card is 80% from the bottom
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    fetchMoreCards(); // Initial fetch
  }, []);

  return (
    <div>
      {cards.map((card, index) => (
        <div
          key={index}
          ref={index === cards.length - 1 ? lastCardElementRef : null}
          className="card"
          style={{ height: "200px", marginBottom: "20px", background: "#f0f0f0" }}
        >
          {card.content}
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default CardList;

interface CardType {
  content: string;
}
