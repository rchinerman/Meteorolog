import React, { useReducer } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";
import { useLocationSearch } from "hooks/useLocationSearch";
import {
  updateLocationInput,
  updateSearchedLocation,
  subscribeToLocation,
  unsubscribeToLocation
} from "screens/settingsSlice";

const Component = ({
  locationInput,
  searchedLocation,
  subscribedLocations,
  updateLocationInput,
  updateSearchedLocation,
  subscribeToLocation,
  unsubscribeToLocation
}) => {
  const { data: locations } = useLocationSearch(searchedLocation);
  console.log(locations);
  return (
    <Container>
      <div>
        <input
          value={locationInput}
          onChange={(e) => updateLocationInput(e.target.value)}
        />
        <SubmitButton onClick={() => updateSearchedLocation()}>
          Submit
        </SubmitButton>
      </div>
      <LocationGroup>
        {locations &&
          locations.map((location) => (
            <Location
              key={location.id}
              onClick={() => subscribeToLocation(location.place_name)}
            >
              {location.place_name}
            </Location>
          ))}
      </LocationGroup>
      <div>
        <Header>Subscribed Locations:</Header>
        {subscribedLocations &&
          subscribedLocations.map((location) => (
            <SubscribedLocation key={location}>
              <SubscribedLocationLabel>{location}</SubscribedLocationLabel>
              <RemoveButton onClick={() => unsubscribeToLocation(location)}>
                <TiDeleteOutline />
              </RemoveButton>
            </SubscribedLocation>
          ))}
      </div>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  locationInput: state.settings.locationInput,
  searchedLocation: state.settings.searchedLocation,
  subscribedLocations: state.settings.subscribedLocations
});

const mapDispatchToProps = {
  updateLocationInput,
  updateSearchedLocation,
  subscribeToLocation,
  unsubscribeToLocation
};

export const Settings = connect(mapStateToProps, mapDispatchToProps)(Component);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`;

const Header = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const LocationGroup = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  border: 1px solid lightgray;
  height: 36px;
  margin-bottom: 4px;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
`;

const SubscribedLocation = styled.div`
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  border: 1px solid lightgray;
  height: 36px;
  margin-bottom: 4px;
  border-radius: 8px;
  padding: 8px;
`;

export const SubscribedLocationLabel = styled.span`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.purple};
  color: white;
  border: none;
  box-shadow: none;
  padding: 8px;
  border-radius: 4px;
  margin: 8px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  padding: 0;
  margin-left: 8px;
  border: none;
  background: none;
  color: red;
  cursor: pointer;
  line-height: 0;
  margin-left: auto;

  svg {
    font-size: 30px;
  }
`;
