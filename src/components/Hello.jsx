const name = 'priyanka';
function displayMessage() {
  return 'Welcome to ReactJS';
}
function Hello({ person }) {
  return (
    <div>
      <h1>
        {displayMessage()} {person.name} {person.message} {person.emoji}{' '}
        {person.seatNumbers}
      </h1>{' '}
      {/* //JSX must be wrapped inside one parent HTML tag (or a fragment <> </>). */}
    </div>
  );
}
export default Hello;
