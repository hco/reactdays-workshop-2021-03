import { reducer } from "./configureStore";

describe("messagesReducer", () => {
  it("creates a valid initialState", () => {
    const initialState = reducer(undefined, { type: "@@Init" });
    expect(initialState).toMatchInlineSnapshot(`
      Object {
        "messages": Array [],
      }
    `);
  });
  it("stores a added message in the state", () => {
    let state;
    state = reducer(
      { messages: [] },
      {
        type: "Message/Added",
        payload: {
          id: "1570699374935",
          message: "baz",
          author: "Elmar",
          date: 1570699374935,
        },
      }
    );
    expect(state).toEqual({
      messages: [
        {
          id: "1570699374935",
          message: "baz",
          author: "Elmar",
          date: 1570699374935,
        },
      ],
    });
  });
});
