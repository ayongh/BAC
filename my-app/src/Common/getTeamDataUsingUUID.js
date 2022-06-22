export function GetTeamData(uuid, teamData) {
  let Team = null;
  teamData.forEach((team) => {
    if (uuid === team.uuid) {
      Team = team;
    }
  });

  return Team;
}
