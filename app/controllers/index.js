import Controller from 'ember-controller';
import computed from 'ember-computed';

export default Controller.extend({
	countries: ['Abyssinian', 'Aegean', 'Arabian', 'Australian', 'Asian', 'Balinese', 'Bambino', 'Bengal', 'Birman', 'Bombay', 'Brazilian', 'British', 'British', 'British', 'Burmese', 'Burmilla', 'California', 'Chantilly', 'Chartreux', 'Chausie', 'Cheetoh', 'Colorpoint', 'Cornish', 'Cymric', 'Cyprus', 'Devon', 'Donskoy', 'Dragon', 'Egyptian', 'European', 'Exotic', 'Foldex', 'Cachorro', 'German', 'Havana', 'Highlander', 'Himalayan', 'Japanese', 'Javanese', 'Kurilian', 'Khao', 'Korat', 'Korean', 'Korn', 'Kurilian', 'Japan', 'LaPerm', 'Lykoi', 'Maine', 'Manx', 'Mekong', 'Minskin', 'Munchkin', 'Nebelung', 'Napoleon', 'Norwegian', 'Ocicat', 'Ojos', 'Oregon', 'Oriental', 'Oriental', 'Oriental', 'PerFold', 'Persian', 'Persian', 'Peterbald', 'Pixie', 'Raas', 'Ragamuffin', 'Ragdoll', 'Russian', 'Russian', 'Sam', 'Savannah', 'Scottish', 'Selkirk', 'Serengeti', 'Serrade', 'Siamese', 'Siberian', 'Singapura', 'Snowshoe', 'Sokoke', 'Somali', 'Sphynx', 'Suphalak', 'Thai', 'Tonkinese', 'Toyger', 'Turkish', 'Turkish', 'United'],

	categories: computed.reads('model')
});
