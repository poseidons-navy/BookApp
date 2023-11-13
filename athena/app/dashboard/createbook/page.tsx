"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {server} from "../../api/server";

function CreateBookpage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    coverURL: "",
    bookURL: ""
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  
    try {
      // Make an API request to create a new book
      const response = await fetch(`/api/publish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Book created successfully!"); 
    // Assuming your backend sends back the created book data
    const createdbook = await response.json();
    console.log("Book created:", createdbook);
    // Reset the form data after submission
    setFormData({
      title: "",
      description: "",
      genre: "",
      coverURL: "",
      bookURL: ""
    });
  }else {
    console.error("Failed to create book:", response.statusText);
  }
} catch (error) {
  console.error("Error creating book:", error);
}
};

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

  return (
    <div>
      <h1 className="mx-[110px]">Create a New Book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div>
                  <label htmlFor="genre">Genre</label>
                  <Input
                    type="text"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                  />
        </div>
        
        <div>
          <label htmlFor="description">Description</label>
          <Input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        

        <div>
          <label htmlFor="coverURL">Cover URL</label>
          <Input
            type="text"
            id="coverURL"
            name="coverURL"
            value={formData.coverURL}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="bookURL">Book URL</label>
          <Input
            type="text"
            id="bookURL"
            name="bookURL"
            value={formData.bookURL}
            onChange={handleInputChange}
          />
        </div>

        <Button className='my-[12px] gap-x-5'
          variant={"outline"} type="submit">
          Create Book
        </Button>
      </form>
    </div>
  );
}

export default CreateBookpage;
//TO BE EDITED TO CONSIST OF API URL, IMPORT AXIOS AND AWAIT AXIOS POST. server.jsfile on frontendsrc and redux file on frontend src