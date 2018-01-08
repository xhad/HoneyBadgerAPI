'use strict';
let rfr = require('rfr');
let data = rfr('data');
let wrapper = rfr('wrapper');
let ServicesTable = new data.ServicesTable();


function Create(event) {

  return ServicesTable.put(JSON.parse(event.body));
}

function Delete(event){
  // If does not exists will give 404.
  return ServicesTable.get(event.pathParameters.serviceId).then(
    () => {
      return ServicesTable.delete(event.pathParameters.serviceId)
    });
}

function Get(event) {
  return ServicesTable.get(event.pathParameters.serviceId);
}

function List(event) {
  console.log(event);
  //TODO(Justin): Add pagination to list results
  return ServicesTable.scan();
}

function Update(event) {
  let input = JSON.parse(event.body);
  return ServicesTable.get(event.pathParameters.serviceId).then((data) => {
    input.createTime = data.createTime;
    input.serviceId = event.pathParameters.serviceId;
    return ServicesTable.put(input);
  })
}

module.exports = wrapper.wrapModule({
  Create,
  Delete,
  Get,
  List,
  Update
});
