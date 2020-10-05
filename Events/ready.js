module.exports = async(client, data) => {

  
  const activities = ["d!help | by skyphrax", "DeltaSupport.cf"]
  client.setInterval(() => {
    const index = Math.floor(Math.random() * activities.length);
    client.user.setActivity(activities[index], {
      type: "STREAMING",
      url: "https://www.twitch.tv/delta"
    });
  }, 8000)
}