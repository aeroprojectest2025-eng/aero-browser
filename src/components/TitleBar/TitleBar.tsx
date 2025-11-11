import { invoke } from "@tauri-apps/api/core";
import { useState } from "react";
import "./TitleBar.css";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegWindowMinimize } from "react-icons/fa";
import { LuMaximize } from "react-icons/lu";
import { MdClose } from "react-icons/md";

export default function TitleBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleMinimize = () => {
    invoke("minimize_window");
  };

  const handleMaximize = () => {
    invoke("maximize_window");
  };

  const handleClose = () => {
    invoke("close_window");
  };

  const handleBack = () => {
    console.log("Back clicked");
    // Add your back navigation logic here
  };

  const handleForward = () => {
    console.log("Forward clicked");
    // Add your forward navigation logic here
  };

  const handleSettings = () => {
    console.log("Settings clicked");
    // Add your settings logic here
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    console.log("Search:", searchQuery);
    setIsSearching(true);

    // Simulate a search operation
    setTimeout(() => {
      setIsSearching(false);
    }, 2000); // Adjust the duration as needed
  };

  return (
    <div className="titlebar" data-tauri-drag-region>
      <div className="titlebar-center">
        <div className="titlebar-left">
          <button
            className="nav-button"
            data-tauri-no-drag
            onClick={handleBack}
            title="Back"
            aria-label="Back"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="nav-button"
            data-tauri-no-drag
            onClick={handleForward}
            title="Forward"
            aria-label="Forward"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="search-wrapper">
          <form
            className="search-container"
            data-tauri-no-drag
            onSubmit={handleSearch}
            aria-busy={isSearching}
            aria-live="polite"
          >
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="7"
                cy="7"
                r="5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11 11L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              data-tauri-no-drag
              type="text"
              className="search-input"
              placeholder="Search or enter URL..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isSearching}
            />
          </form>
          <div
            className={`search-progress-bar ${isSearching ? "active" : ""}`}
          ></div>
        </div>
      </div>
      <div className="titlebar-right">
        <button
          className="settings-button"
          data-tauri-no-drag
          onClick={handleSettings}
          title="Settings"
          aria-label="Settings"
        >
          <IoSettingsOutline />
        </button>
      </div>
      <div className="titlebar-controls" data-tauri-no-drag>
        <button
          className="titlebar-button"
          data-tauri-no-drag
          onClick={handleMinimize}
          title="Minimize"
          aria-label="Minimize"
        >
          <FaRegWindowMinimize className="titlebar-button-icon" />
        </button>
        <button
          className="titlebar-button"
          data-tauri-no-drag
          onClick={handleMaximize}
          title="Maximize"
          aria-label="Maximize"
        >
          <LuMaximize className="titlebar-button-icon" />
        </button>
        <button
          className="titlebar-button close"
          data-tauri-no-drag
          onClick={handleClose}
          title="Close"
          aria-label="Close"
        >
          <MdClose className="titlebar-button-icon" />
        </button>
      </div>
    </div>
  );
}
