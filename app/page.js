import Link from 'next/link';
import StudentInfo from '../StudentInfo';
<a href="/week5">Week 5</a>


const HomePage = () => {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo /> {}
      <p>
        <Link href="/week2">
          <a>Go to Week 2</a>
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
