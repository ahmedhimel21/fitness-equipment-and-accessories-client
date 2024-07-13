type TTeamIntroCardProps = {
  member: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
};

const TeamIntroCard = ({ member }: TTeamIntroCardProps) => {
  return (
    <>
      <div key={member.name} className="max-w-xs text-center">
        <img
          src={member.image}
          alt={member.name}
          className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-md">{member.role}</p>
        <p className="text-sm text-gray-600">{member.bio}</p>
      </div>
    </>
  );
};

export default TeamIntroCard;
