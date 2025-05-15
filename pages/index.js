import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';
import 'lightbox-react/style.css';
import Lightbox from 'lightbox-react';

export default function MissingBabygirl() {
  const [showStrawberries, setShowStrawberries] = useState(false);
  const [loveNotes, setLoveNotes] = useState([
    "Sharko is a great white shark, who appears brutish and tough, but is also slightly dorky with a heart of gold. He loves Marina and will do anything to protect her from harm. Although he occasionally dislikes her singing and eagerness to try new things, he will do anything to make her happy. I think there was a reason you grew up watching this show. (Hint: it's literally about us hehe)",
    "I've never felt the confidence or the ease to melt into someone’s eyes. Your expression, our time together, our distance - they keep changing but I've never seen any change in the way you look at me. Your eyes say all that I need to know; that I'm yours❤️. Bhaisab eye contact bhi kya cheez hei.",
    "I have missed you so much lately and I am so upset that I can't show you my love often because of the distance. I feel deeply for you than I ever have and if I could just get one day with you soon, I am afraid I might kidnap you. I'll keep you locked in my arms and frequently fed with kisses as we sleep with feet tangled. I'll sing for you in the shower and dry your hair later... (text trimmed for length)"
  ]);

  const [galleryImages, setGalleryImages] = useState([
    '/mnt/data/c6ca07b7-433b-4cbb-b834-0a8e29f5eeed.png',
    '/mnt/data/8c820f53-2ae4-4bf5-b60a-4f09f70d5e15.png',
    '/mnt/data/f6c8bc0e-e4be-4644-af82-66e411e52d31.png',
    '/mnt/data/127b9fbf-1271-432e-bd1a-517f1ebd8bf8.png',
    '/mnt/data/c718d369-15e3-4fea-805b-88900ddde809.png'
  ]);

  const [newNote, setNewNote] = useState("");
  const [farewellNote, setFarewellNote] = useState("");
  const [showFarewellInput, setShowFarewellInput] = useState(false);
  const [newImage, setNewImage] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setLoveNotes([...loveNotes, newNote.trim()]);
      setNewNote("");
    }
  };

  const handleFarewellNote = () => {
    setShowFarewellInput(!showFarewellInput);
  };

  const handleAddImage = () => {
    if (newImage.trim() !== "") {
      setGalleryImages([...galleryImages, newImage.trim()]);
      setNewImage("");
    }
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center p-6">
      {/* Intro Message */}
      <h1 className="text-5xl font-bold text-pink-700 mb-6" style={{ fontFamily: 'Pacifico, cursive' }}>Heyy Aaruu,</h1>
      <p className="text-lg text-black mb-6 max-w-3xl text-center" style={{ fontFamily: 'Dancing Script, cursive' }}>Welcome to our private little corner of the internet. The distance is brutal sometimes, and I’m really starting to think of kidnapping you in my WagonR — but this wait actually deepens our love. And if we go deep enough (shhh), we’ll know it’s real. And if it’s real, you’ll find yourself taking me home in your hot car one day.<br/><br/>Will be worth the wait, right?<br/><br/>This is a reminder of what we’re fighting for (a five-hour-long makeout session) and a digital hug for when you really miss babygirl and feel mad that she’s not right here.</p>

      {/* Where is Babygirl? */}
      <Card className="mb-6 w-full max-w-3xl bg-cyan-100 rounded-2xl shadow-lg">
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">🔍 Where is Babygirl?</h2>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFLiYyCvoOR9ksZLBYQZ05m-0FTqZP9cY&q=Current+Location"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </CardContent>
      </Card>

      {/* Missing Babygirl - Gallery Section */}
      <Card className="mb-6 w-full max-w-3xl bg-pink-100 rounded-2xl shadow-lg">
        <CardContent>
          <h2 className="text-3xl font-semibold mb-4">📸 That's My Babygirl</h2>
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((src, idx) => (
              <motion.img key={idx} src={src} alt="Babygirl" className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={() => setLightboxIndex(idx)} />
            ))}
          </div>
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            placeholder="Add a new image URL..."
            className="w-full p-4 mt-4 bg-cyan-50 rounded-xl shadow-lg text-black focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <Button onClick={handleAddImage} className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded-full shadow-lg hover:bg-yellow-500 transition-all">
            Add Image
          </Button>
        </CardContent>
      </Card>

      {lightboxIndex >= 0 && (
        <Lightbox
          mainSrc={galleryImages[lightboxIndex]}
          nextSrc={galleryImages[(lightboxIndex + 1) % galleryImages.length]}
          prevSrc={galleryImages[(lightboxIndex + galleryImages.length - 1) % galleryImages.length]}
          onCloseRequest={() => setLightboxIndex(-1)}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + galleryImages.length - 1) % galleryImages.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
        />
      )}
    </div>
  );
}
