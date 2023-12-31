//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import ListProvider from "../bricks/shopping-list-details/list-provider";
import ListView from "../bricks/shopping-list-details/list-view";
import CreateView from "../bricks/shopping-list-details/create-view";
//@@viewOff:imports

let shoppinglistdetails = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "shoppinglistdetails",
  //@@viewOff:statics

  render() {
    //@@viewOn:render
    return (
      <>
        <RouteBar />
        <ListProvider>
          {({ ShoppingList, remove, update, create }) => (
            <>
              <CreateView onCreate={create} style={{ maxWidth: 400, margin: "24px auto", display: "block" }} />
              <ListView ShoppingList={ShoppingList} onDelete={remove} onUpdate={update} />
            </>
          )}
        </ListProvider>
      </>
    );
    //@@viewOff:render
  },
});

shoppinglistdetails = withRoute(shoppinglistdetails, { authenticated: true });

//@@viewOn:exports
export { shoppinglistdetails };
export default shoppinglistdetails;
//@@viewOff:exports