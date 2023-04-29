import { useState } from "react";
import "../components/Buttons.css";
import "../components/ContactDetails.css";
import "../components/CardStyle.css";


export function ContactAlias({ user, onSave }) {
  const [alias, setAlias] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAliasChange = () => {
    const newUser = { ...user, name: `${user.name} (${alias})` };
    onSave(newUser);
    setAlias("");
    setShowInput(false);
  };
  
  const handleCancel = () => {
    setAlias("");
    setShowInput(false);
  };

  return (
    <div>
      {showInput ? (
        <>
          <input
            type="text"
            placeholder="Enter Alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="input-field"
          />
          <button className="button" onClick={handleCancel}>
            Cancel
          </button>
          <button className="button" onClick={handleAliasChange}>
            Save Alias
          </button>
        </>
      ) : (
        <button className="button" onClick={() => setShowInput(true)}>
          Add Alias
        </button>
      )}
    </div>
  );
}
