import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, deleteBookmark, getBookmarks } from "../slices/appSlice";
import { LuBookmark } from "react-icons/lu";

function BookmarkIcon({ item }) {
  const [booked, setBooked] = useState(false);
  const dispatch = useDispatch();
  const bookmarks = useSelector(getBookmarks);
  console.log(bookmarks);

  const handleBookmarks = (e, item) => {
    e.preventDefault();
    setBooked((booked) => !booked);
    {
      bookmarks.includes(item)
        ? dispatch(deleteBookmark(item.label))
        : dispatch(addBookmark(item));
    }
  };

  return (
    <LuBookmark
      stroke="#D39738"
      fill={booked || bookmarks.includes(item) ? "#D39738" : "transparent"}
      size="20px"
      onClick={(e) => handleBookmarks(e, item)}
    />
  );
}

export default BookmarkIcon;
