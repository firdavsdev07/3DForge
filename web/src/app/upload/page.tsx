"use client";

import { useState } from "react";
import { Upload, File, X } from "lucide-react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (
        droppedFile.name.endsWith(".obj") ||
        droppedFile.name.endsWith(".fbx") ||
        droppedFile.name.endsWith(".gltf") ||
        droppedFile.name.endsWith(".glb")
      ) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement file upload logic
    console.log({ title, content, file });
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">
            Upload Your <span className="text-accent">3D Model</span>
          </h1>
          <p className="text-lg text-foreground/80">
            Share your 3D creation with the world. Add a title, description, and
            upload your model file.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-foreground/50"
              placeholder="Enter a title for your 3D model"
            />
          </div>

          {/* Content/Description Input */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Description *
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-3 bg-secondary border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-foreground placeholder-foreground/50 resize-vertical"
              placeholder="Describe your 3D model, techniques used, inspiration, etc."
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              3D Model File *
            </label>

            {!file ? (
              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-accent bg-accent/10"
                    : "border-secondary hover:border-accent/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="mx-auto h-12 w-12 text-foreground/50 mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Drop your 3D model here
                </p>
                <p className="text-sm text-foreground/60 mb-4">
                  or click to browse files
                </p>
                <p className="text-xs text-foreground/50">
                  Supported formats: .obj, .fbx, .gltf, .glb
                </p>
                <input
                  type="file"
                  accept=".obj,.fbx,.gltf,.glb"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            ) : (
              <div className="bg-secondary rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <File className="h-8 w-8 text-accent" />
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-foreground/60">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-2 hover:bg-background rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-foreground/60" />
                </button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!title || !content || !file}
            className="w-full bg-accent text-background px-8 py-3 rounded-md font-medium hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Upload Model
          </button>
        </form>
      </div>
    </div>
  );
}
