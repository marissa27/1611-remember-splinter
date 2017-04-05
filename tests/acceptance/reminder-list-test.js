/* globals server */

import { test, skip } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list');

test('index route redirects to /reminders', function(assert) {
  server.createList('reminder', 5);

  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/reminders');
    assert.equal(Ember.$('.reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/reminders/reminder/1');
    assert.equal(Ember.$('.reminder-item:first').text().trim(), Ember.$('.reminder-title').text().trim());
  });
});

test('clicking add new reminder reroutes to reminder/new', function(assert) {
  server.createList('reminder', 5);

  visit('/');
  click('.create');


  andThen(function() {
    assert.equal(currentURL(), '/reminders/new');
    assert.equal(Ember.$('input[type="text"]').length, 4);
  });
});
