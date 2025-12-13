// src/features/teachers/view/page.tsx
import { useParams } from 'react-router-dom';
import { TeacherForm } from '../TeacherForm';

export default function ViewTeacher() {
  const { id } = useParams();
  return <TeacherForm mode="VIEW" teacherId={id} />;
}