describe("Server Info Test Suite", function () {
  // initialization logic
  beforeEach(function () {
    serverNameInput = document.getElementById("serverName");
    serverForm = document.getElementById("serverForm");
    serverTbody = document.querySelector("#serverTable tbody");

    allServers = {};
    serverId = 0;
  });

  it("should add server name on submitServerInfo", function () {
    serverNameInput.value = "Test Server";
    submitServerInfo();
    expect(allServers.server1).toEqual({ serverName: "Test Server" });
  });

  it("should clear serverNameInput on submitServerInfo", function () {
    serverNameInput.value = "Test Server";
    submitServerInfo();
    expect(serverNameInput.value).toEqual("");
  });

  it("should update server table on updateServerTable", function () {
    allServers = {
      server1: { serverName: "John", tipAmt: "10" },
      server2: { serverName: "Jane", tipAmt: "20" },
    };
    updateServerTable();
    let rows = serverTbody.querySelectorAll("tr");
    expect(rows.length).toEqual(2);
  });

  afterEach(function () {
    // teardown logic
    document.body.innerHTML = "";
  });
});
