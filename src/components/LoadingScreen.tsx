import Container from "@/components/Container";

import Spinner from "@/components/Spinner";

const LoadingScreen = () => {
  return (
    <div className="flex items-center min-h-screen py-2rem">
      <Container>
        <div className="flex items-center justify-center">
          <div>
            <Spinner />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoadingScreen;
