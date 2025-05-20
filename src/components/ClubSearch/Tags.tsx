import Card from '../ClubList/Card';

const Tags = ({ data }) => {
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((club, idx) => (
                <Card
                    key={idx}
                    imageUrl={club.imageUrl}
                    tags={club.tags}
                    clubName={club.clubName}
                    description={club.description}
                />
            ))}
        </div>
    );
};

export default Tags;
