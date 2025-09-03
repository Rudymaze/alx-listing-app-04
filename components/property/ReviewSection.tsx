// const BookingSection: React.FC<{ price: number }> = ({ price }) => {
//   return (
//     <div className="bg-white p-6 shadow-md rounded-lg">
//       <h3 className="text-xl font-semibold">${price}/night</h3>
//       <div className="mt-4">
//         <label>Check-in</label>
//         <input type="date" className="border p-2 w-full mt-2" />
//       </div>
//       <div className="mt-4">
//         <label>Check-out</label>
//         <input type="date" className="border p-2 w-full mt-2" />
//       </div>

//       {/* Total payment */}
//       <div className="mt-4">
//         <p>
//           Total payment: <strong>${price * 7}</strong>
//         </p>
//       </div>

//       {/* Reserve button */}
//       <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
//         Reserve now
//       </button>
//     </div>
//   );
// };

// export default BookingSection;

import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
