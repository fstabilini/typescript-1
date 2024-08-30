import { useState } from "react";

interface Profile {
  name: string;
  age: number;
  bio: string;
}

const ProfileCard: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: "Flor",
    age: 45,
    bio: "cellist and programmer",
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editProfile, setEditProfile] = useState<Profile>({ ...profile });

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const saveProfile = () => {
    setProfile(editProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-card">
      {isEditing ? (
        <div>
          <h2>Edit Profile</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editProfile.name}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={editProfile.age}
              onChange={handleEditChange}
            />
          </label>
          <label>
            Bio:
            <textarea
              name="bio"
              value={editProfile.bio}
              onChange={handleEditChange}
            />
          </label>
          <button onClick={saveProfile}>Save</button>
        </div>
      ) : (
        <div>
          <h2>Profile</h2>
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Age:</strong> {profile.age}
          </p>
          <p>
            <strong>Bio:</strong> {profile.bio}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
