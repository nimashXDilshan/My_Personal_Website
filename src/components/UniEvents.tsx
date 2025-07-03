import Im1 from '../../public/assets/projects/cse40-university-of-moratuwa/475495442_122134081268476178_1123175782665307527_n.jpg';
import Im2 from '../../public/assets/projects/cse40-university-of-moratuwa/475783215_122134436990476178_9157025823214319272_n.jpg';
import Im3 from '../../public/assets/projects/cse40-university-of-moratuwa/475826554_122134444376476178_8256550080216381031_n.jpg';
import Im4 from '../../public/assets/projects/cse40-university-of-moratuwa/476081760_122134442108476178_9066813346093540042_n.jpg';

import Im5 from '../../public/assets/projects/hit-the-grounds-uom/470180308_1000245575455723_6366031204366054997_n.jpg';
import Im6 from '../../public/assets/projects/hit-the-grounds-uom/470212962_998756992271248_2383605579274854578_n.jpg';
import Im7 from '../../public/assets/projects/hit-the-grounds-uom/471421574_1007583331388614_1621733068095303035_n.jpg';
import Im8 from '../../public/assets/projects/hit-the-grounds-uom/471421574_1007583331388614_1621733068095303035_n.jpg';


const events = [
  {
    id: 1,
    title: 'CSE40',
    date: 'June 10, 2025',
    description:
      'A commemorative digital platform built to celebrate the 40th anniversary of the Department of Computer Science & Engineering at the University of Moratuwa. CSE40 showcases the department’s legacy, impact, and future through interactive timelines, alumni highlights, and event archives.',
    images: [Im1, Im2, Im3,Im4],

  },
  {
    id: 2,
    title: 'Hit-The-Grounds',
    date: 'May 22, 2025',
    description:
      '"Hit-The-Ground" is a thrilling cricket tournament organized by the Department of Computer Engineering (CES), University of Moratuwa. The event brings together top Sri Lankan tech companies and three energetic student batches for a day of sportsmanship, team spirit, and networking beyond code.',
    images: [Im5, Im6, Im7,Im8],
  },
];

const Events = () => {
  return (
    <section id="uni-events" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">University Events</h2>
          <p className="text-gray-600 text-lg">
            Explore our most exciting university moments and experiences.
          </p>
        </div>

        <div className="space-y-16">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{event.date}</p>
              <p className="text-gray-700 mb-6">{event.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${event.title} - ${i + 1}`}
                    className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
