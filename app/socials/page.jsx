import Link from "next/link";

const Social = ({ facebook, linkedin, mail, telephone }) => {
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
        {mail && (
          <li>
            <Link href={`mailto:${mail}`}>
              <i className="fas fa-envelope"></i>
            </Link>
          </li>
        )}
        {telephone && (
          <li>
            <Link href={`tel:${telephone}`} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-phone-alt"></i>
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Social;
