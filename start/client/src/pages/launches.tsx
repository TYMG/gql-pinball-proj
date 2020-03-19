import React, { Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import gql from "graphql-tag";

interface LaunchesProps extends RouteComponentProps {}

export const LAUNCH_TILE_DATA = gql`
  fragment LaunchTile on Launch {
    __typename
    id
    isBooked
    rocket {
      id
      name
    }
    mission {
      name
      missionPatch
    }
  }
`;

const Launches: React.FC<LaunchesProps> = () => {
  return <div />;
};

export default Launches;
