import "./userCard.css";
import ShimmerUI from "./shimmerUI";
export default function UserCard({userData}) {

  return (
    <div className="card">
      <div className="img-wraper">
        <div className="imgBox" style={{ position: "relative" }}>
          <img
            style={{ position: "relative", zIndex: "3" }}
            src={userData.image_url}
            alt="User"
            className="card-image"
          />
          <div className="travler" style={{ zIndex: "2" }}></div>
        </div>
      </div>

      <div className="card-content">
        <h2 className="card-title">{userData.name}</h2>
        <p className="card-details">{userData.gender}</p>
        <p className="card-details">{userData.age}</p>
        <p className="card-details">{userData.country}</p>
      </div>
    </div>
  );
}
