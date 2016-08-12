import Ember from 'ember';
import Route from 'ember-route';
import Mixin from 'ember-metal/mixin';

const { on, getProperties } = Ember;

const CategoriesGenerationMixin = Mixin.create({
	categories: ['buildings', 'food', 'nature', 'people', 'technology', 'objects'],

	activities: ['experience', 'eat', 'love', 'meet', 'make', 'touch'],

	_populateData: on('activate', function () {
		const {
			categories,
			activities
			} = getProperties(this, 'categories', 'activities');
		let categoriesObj = {};

		categoriesObj['data'] = categories.map((category, index) => {
			return {
				type: 'categorys',
				id: index + 1,
				attributes: {
					name: category,
					description: activities[index],
					image: `https://source.unsplash.com/category/${category}`
				},
				relationships: {}
			};
		});

		this.store.pushPayload(categoriesObj);
	})
});

export default Route.extend(CategoriesGenerationMixin);
