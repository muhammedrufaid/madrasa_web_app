// src/features/teachers/view/page.tsx
import { useParams } from 'react-router-dom';
import { ClassRoomForm } from '../ClassRoomForm';

export default function ViewClassRoom() {
  const { id } = useParams();
  return <ClassRoomForm mode="VIEW" classRoomId={id} />;
}