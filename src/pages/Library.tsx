import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import InfoCard from '../components/InfoCard';
import kidsBookImage from '../assets/images/kids_book.jpg';
import classicBookImage from '../assets/images/quill.jpeg';
import adultBookImage from '../assets/images/friends2.jpeg';
import profBookImage from '../assets/images/einstein2.jpeg';
import fictionBookImage from '../assets/images/sci-fi.jpeg';
import healthBookImage from '../assets/images/meditation2.jpeg';

interface CardData {
  id: number;
  image: string;  
  title: string;
  description: string;
}

const Library: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<CardData[]>([]);

  // Example initial data
  const cardsData: CardData[] = [
    { id: 1, image: kidsBookImage, title: "Children's books", description: 'Variety of genres for young explorers: fantasy, science fiction, educational stories,  adventure, fairy tales and folklore, humor, historical fiction and more' },
    { id: 2, image: classicBookImage, title: "Classic literature", description: 'Timeless masterpieces from renowned authors whose works serves as a mirror reflecting universal truth and the depth of human emotion' },
    { id: 3, image: fictionBookImage, title: "Science Fiction", description: 'Step into limitless possibilities of futuristic sphere. Our collections transport you across galaxies to alien planet, through time and alternate realities.'},
    { id: 4, image: adultBookImage, title: "Young Adult", description: 'Provides a wealth of perspectives that inspire empathy, courage and self-discovery, that range from fantastical worlds to the gritty realities of urban life ' },
    { id: 5, image: profBookImage, title: "Academic & Professional", description: 'Comprehensive collection of books penned by leading experts, educators to support and enhance your learning journey across a variety of disciplines ' },
    { id: 5, image: healthBookImage, title: "Mind & Body", description: 'Our curated collection designed to enhace your well-being. Dive into the health literature about  mindfullness, nutrition, physical fitness, scientific insights ' }
  ];

  useEffect(() => {
    setFilteredData(cardsData);  // Initialize filteredData with all items
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const lowercasedTerm = term.toLowerCase();
    const filtered = cardsData.filter(card => 
      card.title.toLowerCase().includes(lowercasedTerm) || 
      card.description.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 justify-items-center">
        {filteredData.map((card) => (
          <InfoCard key={card.id} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Library;
