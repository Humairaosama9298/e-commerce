import Image from 'next/image';
import React from 'react';
Image

export default function EditorsPick() {
  return (
    <div className="bg-white py-10 px-5">
      <h2 className="text-center text-xl font-bold mb-2">EDITOR'S PICK</h2>
      <p className="text-center text-gray-500 mb-8">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative group">
          <Image
            src="/editorspic/men.png"
            alt="Men"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">MEN</span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/editorspic/women.png"
            alt="Women"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">WOMEN</span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/editorspic/accessories.png"
            alt="Accessories"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">ACCESSORIES</span>
          </div>
        </div>
        <div className="relative group">
          <Image
            src="/editorspic/kid.png"
            alt="Kids"
            className="w-full h-auto rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">KIDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};
