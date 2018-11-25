import Route from '@ember/routing/route';

export default Route.extend({
    model(param) {
        return this.store.peekRecord('record',param.record_id);
    }
});
