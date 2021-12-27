import MeetupItem from "../components/meetups/MeetupItem";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <ul>
        {DUMMY_DATA.map((meetup) => (
          <MeetupItem
            title={meetup.title}
            description={meetup.description}
            address={meetup.address}
            id={meetup.id}
            image={meetup.image}
          />
          // <li key={meetup.id}>{meetup.title}</li>
        ))}
      </ul>
    </section>
  )
}

export default AllMeetupsPage;