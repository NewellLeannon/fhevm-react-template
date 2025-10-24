export const NETWORK_CONFIGS = {
  sepolia: {
    chainId: 11155111,
    name: 'Sepolia',
    gatewayUrl: 'https://gateway.sepolia.fhenix.zone',
    aclAddress: '0x...',
    kmsVerifierAddress: '0x...',
  },
  localhost: {
    chainId: 1337,
    name: 'Localhost',
    gatewayUrl: 'http://localhost:8545',
  },
  hardhat: {
    chainId: 31337,
    name: 'Hardhat',
    gatewayUrl: 'http://127.0.0.1:8545',
  },
};

export const DEFAULT_TIMEOUT = 60000; // 60 seconds

export const ENCRYPTION_TYPES = {
  EUINT8: 'euint8',
  EUINT16: 'euint16',
  EUINT32: 'euint32',
  EUINT64: 'euint64',
  EBOOL: 'ebool',
  EADDRESS: 'eaddress',
} as const;

export const EIP712_DOMAIN = {
  name: 'FHEVM',
  version: '1',
};
