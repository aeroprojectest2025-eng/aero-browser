import { invoke } from '@tauri-apps/api/core';
import { useState } from 'react';
import './TitleBar.css';

export default function TitleBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleMinimize = () => {
    invoke('minimize_window');
  };

  const handleMaximize = () => {
    invoke('maximize_window');
  };

  const handleClose = () => {
    invoke('close_window');
  };

  const handleBack = () => {
    console.log('Back clicked');
    // Add your back navigation logic here
  };

  const handleForward = () => {
    console.log('Forward clicked');
    // Add your forward navigation logic here
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
    // Add your search logic here
  };

  return (
    <div className="titlebar" data-tauri-drag-region>
      <div className="titlebar-drag">
        <div className="titlebar-left">
          <button className="nav-button" data-tauri-no-drag onClick={handleBack} title="Back" aria-label="Back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-button" data-tauri-no-drag onClick={handleForward} title="Forward" aria-label="Forward">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

  <form className="search-container" data-tauri-no-drag onSubmit={handleSearch}>
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            data-tauri-no-drag
            type="text"
            className="search-input"
            placeholder="Search or enter URL..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="titlebar-controls" data-tauri-no-drag>
        <button className="titlebar-button" data-tauri-no-drag onClick={handleMinimize} title="Minimize" aria-label="Minimize">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect y="5" width="12" height="2" fill="currentColor"/>
          </svg>
        </button>
        <button className="titlebar-button" data-tauri-no-drag onClick={handleMaximize} title="Maximize" aria-label="Maximize">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <rect width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </button>
        <button className="titlebar-button close" data-tauri-no-drag onClick={handleClose} title="Close" aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M1 1 L11 11 M11 1 L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}