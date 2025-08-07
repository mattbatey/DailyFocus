import React, { useState, useEffect, useRef } from 'react';

const FOCUS_KEY = 'mainFocus';

const MainFocus = () => {
    const [focus, setFocus] = useState('');
    const [input, setInput] = useState('');
    const [editing, setEditing] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const savedFocus = localStorage.getItem(FOCUS_KEY);
        if (savedFocus) setFocus(savedFocus);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        if (showMenu) {
            //document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);

    const handleInputChange = (e) => setInput(e.target.value);

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            setFocus(input.trim());
            localStorage.setItem(FOCUS_KEY, input.trim());
            setEditing(false);
        }
    };

    const handleEdit = () => {
        setInput(focus);
        setEditing(true);
        setShowMenu(false);
    };

    const handleClear = () => {
        setFocus('');
        setInput('');
        localStorage.removeItem(FOCUS_KEY);
        setEditing(true);
        setShowMenu(false);
    };

    if (editing || !focus) {
        return (
            <div className="main-focus">
                <h3>What is your main focus for today?</h3>
                <input
                    id="focus-input"
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    autoFocus
                    autoComplete='off'
                />
            </div>
        );
    }

    return (
        <div className="main-focus"
                onMouseLeave={() => setShowMenu(false)}>
            <h5>TODAY</h5>
            <div
                className="focus-container"
                style={{ position: 'relative', display: 'inline-block' }}
            >
                <span className="focus">{focus}</span>
                <button
                    className="ellipsis-btn"
                    onClick={() => setShowMenu((v) => !v)}
                    tabIndex={-1}
                    aria-label="Show actions"
                    ref={menuRef}
                ><svg data-v-51ce07eb="" viewBox="0 0 60 60" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path xmlns="http://www.w3.org/2000/svg" d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>
                </button>
                {showMenu && (
                    <div
                        className="popup-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: -35,
                            background: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: 4,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                            zIndex: 10,
                            minWidth: 100,
                        }}
                    >
                        <button
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '8px 12px',
                                background: 'none',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer'
                            }}
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '8px 12px',
                                background: 'none',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer'
                            }}
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainFocus;