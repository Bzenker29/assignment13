const express = require('express');
const path = require('path');
const app = express();

sapp.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/animals', (req, res) => {
    const animalFacts = [
        {
            name: 'Narwhal',
            category: 'Marine Mammal',
            habitat: 'Arctic and Subarctic waters',
            foodItems: 'Fish and squid',
            color: 'Mottled gray to bluish-gray with a white belly',
            funFact: 'Narwhals have long, spiral tusks made of elongated teeth, used for various purposes, including hunting and navigation.',
            img: 'images/narwhal.jpeg',
        },
        {
            name: 'Axolotl',
            category: 'Amphibian',
            habitat: 'Lakes in Mexico (now mostly in captivity)',
            foodItems: 'Small aquatic invertebrates',
            color: 'Various colors, including pink, white, and brown, with speckled patterns',
            funFact: 'Axolotls are known for their remarkable regenerative abilities, allowing them to regrow lost body parts.',
            img: 'images/axolotl.jpeg',

        },
        {
            name: 'Platypus',
            category: 'Monotreme (Egg-Laying Mammal)',
            habitat: 'Eastern Australia, rivers, streams, and lakes',
            foodItems: 'Aquatic invertebrates, such as insects and crustaceans',
            color: 'Brown fur with a unique duck-bill and webbed feet',
            funFact: 'Platypuses are one of the few egg-laying mammals, laying eggs instead of giving birth to live young.',
            img: 'images/platypus.jpeg',

        },
        {
            name: 'Fossa',
            category: 'Mammal',
            habitat: 'Madagascar, various forest types',
            foodItems: 'Lemurs, small mammals, birds, and reptiles',
            color: 'Reddish-brown coat with white fur on the belly and throat',
            funFact: 'Fossas have a cat-like appearance but are more closely related to mongooses and are the top predators in their ecosystem.',
            img: 'images/fossa.jpeg',

        },
        {
            name: 'Mantis Shrimp',
            category: 'Marine Crustacean',
            habitat: 'Warm tropical waters, coral reefs, and sandy substrates',
            foodItems: 'Fish, crabs, mollusks, and crustaceans',
            color: 'Vibrant colors, including blues, greens, reds, and yellows',
            funFact: 'Mantis shrimps have some of the most advanced eyes in the animal kingdom and can deliver lightning-fast strikes with their powerful claws.',
            img: 'images/mantis-shrimp.jpeg',

        },
        {
            name: 'Okapi',
            category: 'Mammal',
            habitat: 'Dense rainforests of the Democratic Republic of Congo',
            foodItems: 'Leaves, buds, and fruits from rainforest vegetation',
            color: 'Dark reddish-brown body with white horizontal stripes on legs',
            funFact: 'Okapis are often called the "forest giraffe" due to their unique appearance and were not known to the Western world until the early 20th century.',
            img: 'images/okapi.jpeg'

        }
    ];

    res.json(animalFacts);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});