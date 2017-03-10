import Model from '../../../components/task-collection/task-collection_model';
import taskModel from '../../../components/task-item/task-item_model';

let taskCollectionModel = Model;

describe("taskCollectionModel()", function() {

  let data = [
    {
      category:"4",
      daily:false,
      deadline:"2016-12-31",
      desc:"Description 222",
      done:false,
      estimation:"4",
      id:"12345",
      priority:"high",
      title:"Task 222"
    },
    {
      category:"2",
      daily:true,
      deadline:"2016-12-30",
      desc:"Description 333",
      done:true,
      estimation:"2",
      id:"54321",
      priority:"middle",
      title:"Task 333"
    }
  ];

  let testTaskModel1 = new taskModel(data[0]);
  let testTaskModel2 = new taskModel(data[1]);

  let testCollectionModel = new taskCollectionModel();

  it('taskCollectionModel should be defined', () => {
    assert.isDefined(taskCollectionModel);
  });

  it('Methods (addToCollection() & getTaskData() & update() & removeTask() & getCollectionData() should be defined', ()=> {
    assert.isDefined(testCollectionModel.addToCollection);
    assert.isDefined(testCollectionModel.getTaskData);
    assert.isDefined(testCollectionModel.update);
    assert.isDefined(testCollectionModel.removeTask);
    assert.isDefined(testCollectionModel.getCollectionData);
  });

  it('taskCollectionModel.addToCollection() should set right value', ()=> {
    testCollectionModel.addToCollection(testTaskModel1);
    testCollectionModel.addToCollection(testTaskModel2);
    expect(testCollectionModel.collection).to.be.an('array');
    expect(testCollectionModel.collection.length).to.be.equal(2);
  });

});

