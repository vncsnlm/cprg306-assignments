import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Your name: Vinicius Melo</p>
      <p>Your course section: CPRG 306 A</p>
      <p>
        <Link href="https://github.com/vncsnlm/cprg306-assignments">
          <a>Link to GitHub</a>
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
