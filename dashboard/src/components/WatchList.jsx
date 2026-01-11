import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChart,
  MoreHoriz,
  Search, // <--- Import Search Icon
} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <Search className="search-icon" /> {/* Added Icon */}
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly..."
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  const handleMouseEnter = () => setShowWatchlistActions(true);
  const handleMouseLeave = () => setShowWatchlistActions(false);

  const handleBuyClick = () => openBuyWindow(stock.name);
  const handleSellClick = () => openSellWindow(stock.name);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown
              className="down"
              style={{ fontSize: "1.2rem" }}
            />
          ) : (
            <KeyboardArrowUp className="up" style={{ fontSize: "1.2rem" }} />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <div className="actions">
          <span className="action-buttons">
            <Tooltip
              title="Buy (B)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="buy" onClick={handleBuyClick}>
                B
              </button>
            </Tooltip>
            <Tooltip
              title="Sell (S)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="sell" onClick={handleSellClick}>
                S
              </button>
            </Tooltip>
            <Tooltip
              title="Analytics (A)"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="action-btn">
                <BarChart style={{ fontSize: "1.2rem" }} />
              </button>
            </Tooltip>
            <Tooltip
              title="More"
              placement="top"
              arrow
              TransitionComponent={Grow}
            >
              <button className="action-btn">
                <MoreHoriz style={{ fontSize: "1.2rem" }} />
              </button>
            </Tooltip>
          </span>
        </div>
      )}
    </li>
  );
};
