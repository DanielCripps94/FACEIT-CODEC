import React from 'react';
import H6 from './H6';
import Button from './Button';
import './Tournament.css';
import { parseDate } from '../helpers';

export const Tournament = ({
  tournament,
  editTournament,
  deleteTournament
}) => {
  const { name, game, participants, startDate, organizer, id } = tournament;

  return (
    <div className="tournament-card">
      <H6>{name}</H6>
      <p>Organizer: {organizer}</p>
      <p>Game: {game}</p>
      <p>Participants: {`${participants.current}/ ${participants.max}`}</p>
      <p>Start Date: {parseDate(startDate)}</p>
      <Button onClick={() => editTournament(id, name)} className="btn edit-btn">
        Edit
      </Button>
      <Button onClick={() => deleteTournament(id)} className="btn delete-btn">
        Delete
      </Button>
    </div>
  );
};
