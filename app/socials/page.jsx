import Link from "next/link";

const Social = ({ facebook, linkedin }) => {
  return (
    <>
      <ul>
        {facebook && (
          <li>
            <Link href={facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
        )}
        {linkedin && (
          <li>
            <Link href={linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Social;