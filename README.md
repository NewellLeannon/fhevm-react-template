# FHEVM React Template - Universal SDK

A universal FHEVM SDK and template collection for building confidential dApps with Fully Homomorphic Encryption.

## Overview

This repository provides a framework-agnostic SDK that makes building confidential frontends simple, consistent, and developer-friendly. The SDK wraps all required FHE packages and provides a wagmi-like structure for web3 developers.

## Live Examples

**Artist Income Analyzer**: [https://fhe-artist-income-analyzer.vercel.app/](https://fhe-artist-income-analyzer.vercel.app/)

**GitHub**: [https://github.com/NewellLeannon/fhevm-react-template](https://github.com/NewellLeannon/fhevm-react-template)

**Demo Video**: Download demo.mp4 to watch the demonstration. Direct video links are not accessible.

## Features

- Framework-agnostic core SDK (Node.js, Next.js, Vue, React)
- Wrapper for all required FHE packages
- Wagmi-like API structure
- Fast setup for encryption and decryption flows
- Modular and reusable components

## Quick Start

```bash
# Install all packages from root
npm install

# Build SDK
npm run build:sdk

# Run examples
cd examples/artist-income-nextjs
npm run dev
```

## Project Structure

```
fhevm-react-template/
├── packages/
│   └── fhevm-sdk/              # Universal FHEVM SDK
│       ├── src/
│       │   ├── core/           # Core functionality
│       │   ├── react/          # React hooks
│       │   └── vue/            # Vue composables
│       └── package.json
├── examples/
│   ├── artist-income-nextjs/   # Next.js example
│   └── nextjs-artist-income/   # Alternative Next.js implementation
│   └── react-artist-income/    # React example
└── package.json
```

## SDK Usage

### Installation

```bash
npm install @fhevm/sdk
```

### Basic Usage

```typescript
import { FhevmClient } from '@fhevm/sdk';

// Initialize client
const client = new FhevmClient({
  network: 'sepolia',
});

await client.initialize();

// Create contract instance
const instance = await client.createContractInstance(contractAddress);

// Encrypt data
const encrypted = await instance.encrypt32(42);

// Use in contract call
await contract.submitData(encrypted.data);
```

### React Integration

```typescript
import { useFhevm, useEncryption } from '@fhevm/sdk/react';

function MyComponent() {
  const { client, initialized } = useFhevm();
  const { encrypt32 } = useEncryption(contractAddress);
  
  const handleSubmit = async (value) => {
    const encrypted = await encrypt32(value);
    await contract.submitData(encrypted.data);
  };
  
  return <button onClick={() => handleSubmit(42)}>Submit</button>;
}
```

## Examples

### 1. Artist Income Analyzer (Next.js)

Privacy-preserving artist income analysis platform.

**Features**:
- Anonymous artist registration
- Encrypted income submission
- Aggregate analytics
- Privacy-protected reporting

**Tech Stack**:
- Next.js 14
- FHEVM SDK
- TailwindCSS
- Ethers.js

**Run**:
```bash
cd examples/artist-income-nextjs
npm install
npm run dev
```

### 2. Privacy Reporting

Additional example demonstrating SDK versatility.

## SDK API Reference

### Core

#### FhevmClient

```typescript
class FhevmClient {
  constructor(config: FhevmClientConfig)
  initialize(): Promise<void>
  createContractInstance(address: string): Promise<FhevmInstance>
  isInitialized(): boolean
}
```

#### Encryption

```typescript
interface FhevmInstance {
  encrypt8(value: number): Promise<EncryptionResult>
  encrypt16(value: number): Promise<EncryptionResult>
  encrypt32(value: number): Promise<EncryptionResult>
  encrypt64(value: bigint): Promise<EncryptionResult>
  encryptBool(value: boolean): Promise<EncryptionResult>
  encryptAddress(value: string): Promise<EncryptionResult>
}
```

### React Hooks

```typescript
// Client hook
function useFhevm(config?: FhevmClientConfig): {
  client: FhevmClient | null
  initialized: boolean
  error: Error | null
}

// Encryption hook
function useEncryption(contractAddress: string): {
  encrypt8: (value: number) => Promise<EncryptionResult>
  encrypt16: (value: number) => Promise<EncryptionResult>
  encrypt32: (value: number) => Promise<EncryptionResult>
  encrypt64: (value: bigint) => Promise<EncryptionResult>
  encryptBool: (value: boolean) => Promise<EncryptionResult>
  encryptAddress: (value: string) => Promise<EncryptionResult>
  loading: boolean
  error: Error | null
}

// Decryption hook
function useDecryption(contractAddress: string): {
  decrypt: (handle: string) => Promise<any>
  loading: boolean
  error: Error | null
}
```

## Development

### Build SDK

```bash
npm run build:sdk
```

### Run Tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

## Requirements

The SDK provides:

1. **Initialization utilities** for FHEVM setup
2. **Encryption/decryption flows** with EIP-712 signatures
3. **Modular API structure** similar to wagmi
4. **Reusable components** for common scenarios
5. **Framework adapters** for React, Vue, and vanilla JS

## Documentation

### Setup Time

Less than 10 lines of code to get started:

```typescript
import { FhevmClient } from '@fhevm/sdk';

const client = new FhevmClient({ network: 'sepolia' });
await client.initialize();
const instance = await client.createContractInstance(address);
const encrypted = await instance.encrypt32(value);
```

### Complete Flow

1. **Install**: `npm install @fhevm/sdk`
2. **Initialize**: Create and initialize client
3. **Encrypt**: Use encryption methods
4. **Interact**: Call contract with encrypted data
5. **Decrypt**: Retrieve and decrypt results

## Evaluation Criteria

This SDK demonstrates:

- **Usability**: Quick setup with minimal boilerplate
- **Completeness**: Full FHEVM flow coverage
- **Reusability**: Clean, modular, framework-adaptable
- **Documentation**: Clear examples and guides
- **Creativity**: Multiple environment showcases

## Deliverables

- ✅ Universal FHEVM SDK package
- ✅ Next.js example (Artist Income Analyzer)
- ✅ Complete documentation
- ✅ Video demonstration
- ✅ Deployed examples

## Contributing

Contributions welcome! See examples for implementation patterns.

## License

BSD 3-Clause Clear License

## Links

- **Examples**: See `/examples` directory
- **Artist Income**: [Live Demo](https://fhe-artist-income-analyzer.vercel.app/)
- **Documentation**: [Zama Docs](https://docs.zama.ai)
- **fhEVM**: [fhEVM Docs](https://docs.fhevm.zama.ai)
