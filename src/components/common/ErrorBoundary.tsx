import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  moduleName?: string;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary — Catches rendering errors in child components and displays
 * a themed fallback UI instead of crashing the entire application.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(
      `[ErrorBoundary${this.props.moduleName ? ` · ${this.props.moduleName}` : ''}]`,
      error,
      errorInfo.componentStack
    );
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    // Allow a custom fallback to completely replace the default UI
    if (this.props.fallback) {
      return this.props.fallback;
    }

    return (
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-lg rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
          {/* Header */}
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 text-lg">
              ⚠
            </span>
            <div>
              <h3 className="text-base font-semibold text-slate-100">
                Something went wrong
              </h3>
              {this.props.moduleName && (
                <p className="text-xs text-slate-400">
                  Module: <span className="font-medium text-amber-400">{this.props.moduleName}</span>
                </p>
              )}
            </div>
          </div>

          {/* Error message */}
          {this.state.error && (
            <pre className="mb-5 max-h-36 overflow-auto rounded-lg bg-slate-950 p-3 font-mono text-xs leading-relaxed text-red-400 border border-slate-800 scrollbar-thin">
              {this.state.error.message}
            </pre>
          )}

          {/* Try Again button */}
          <button
            onClick={this.handleReset}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500/15 px-4 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-500/25 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
          >
            <span className="text-base">↻</span>
            Try Again
          </button>
        </div>
      </div>
    );
  }
}
