import { StoreTest } from "webda/lib/stores/store.spec";
import { Store, Ident } from "webda";
import { test, suite } from "mocha-typescript";

@suite
class MongoDBTest extends StoreTest {
  getIdentStore(): Store<any> {
    return <Store<any>>this.getService("mongoidents");
  }
  getUserStore(): Store<any> {
    return <Store<any>>this.getService("mongousers");
  }

  getModelClass() {
    return Ident;
  }
}
