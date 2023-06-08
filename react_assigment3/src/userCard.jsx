import "./userCard.css";
export default function UserCard({ userData }) {
  const biodata = userData;
  return (
    <div className="biodata-card">
      <h2>Biodata</h2>
      <div className="biodata-details">
        <div className="biodata-field">
          <span>First Name:</span>
          <span>{biodata.firstName}</span>
        </div>

        <div className="biodata-field">
          <span>Last Name:</span>
          <span>{biodata.lastName}</span>
        </div>
        <div className="biodata-field">
          <span>Gender:</span>
          <span>{biodata.gender}</span>
        </div>
        <div className="biodata-field">
          <span>Email:</span>
          <span>{biodata.email}</span>
        </div>
        <div className="biodata-field">
          <span>Date of Birth:</span>
          <span>{biodata.dob}</span>
        </div>
        <div className="biodata-field">
          <span>Age:</span>
          <span>{biodata.age}</span>
        </div>
        <div className="biodata-field">
          <span>Phone:</span>
          <span>{biodata.phone}</span>
        </div>
        <div className="biodata-field">
          <span>Cell:</span>
          <span>{biodata.cell}</span>
        </div>
        <div className="biodata-field">
          <span>Street No:</span>
          <span>{biodata.streetNo}</span>
        </div>
        <div className="biodata-field">
          <span>Street Name:</span>
          <span>{biodata.streetName}</span>
        </div>
        <div className="biodata-field">
          <span>City:</span>
          <span>{biodata.city}</span>
        </div>
        <div className="biodata-field">
          <span>State:</span>
          <span>{biodata.state}</span>
        </div>
        <div className="biodata-field">
          <span>Country:</span>
          <span>{biodata.country}</span>
        </div>
        <div className="biodata-field">
          <span>Postcode:</span>
          <span>{biodata.postcode}</span>
        </div>
        {/* Other fields */}
      </div>
      <div className="biodata-image">
        <img src={biodata.photoUrl} alt="User" />
      </div>
    </div>
  );
}
