// problem 6.
type Profile = {
  name: string;
  age: number;
  email: string;
};

type ParsonPartial = Partial<Profile>;

function updateProfile(myProfile: Profile, update: ParsonPartial): Profile {
  const up = { ...myProfile, ...update };
  return up;
}

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 989 }));
