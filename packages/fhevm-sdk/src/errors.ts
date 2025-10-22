export class FhevmError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FhevmError';
  }
}

export class EncryptionError extends FhevmError {
  constructor(message: string) {
    super(message);
    this.name = 'EncryptionError';
  }
}

export class DecryptionError extends FhevmError {
  constructor(message: string) {
    super(message);
    this.name = 'DecryptionError';
  }
}

export class InitializationError extends FhevmError {
  constructor(message: string) {
    super(message);
    this.name = 'InitializationError';
  }
}

export class NetworkError extends FhevmError {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class SignerError extends FhevmError {
  constructor(message: string) {
    super(message);
    this.name = 'SignerError';
  }
}
