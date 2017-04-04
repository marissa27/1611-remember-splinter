import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('reminders', {path: '/reminders/:reminder_id'}, function() {
    this.route('reminder');
  });
});

export default Router;
