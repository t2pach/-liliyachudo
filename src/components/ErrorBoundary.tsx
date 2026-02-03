import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Phone, RefreshCw, AlertTriangle } from 'lucide-react';
import { companyInfo } from '@/mock';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-1 p-4">
          <div className="max-w-md w-full bg-white rounded-2xl md:rounded-3xl shadow-xl p-8 md:p-10 text-center">
            {/* Error Icon */}
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Что-то пошло не так
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Произошла ошибка при загрузке страницы. 
              Пожалуйста, попробуйте обновить страницу или свяжитесь с нами.
            </p>

            {/* Error Details (in development) */}
            {import.meta.env.DEV && this.state.error && (
              <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left overflow-auto">
                <p className="text-sm font-mono text-red-600">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={this.handleReload}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-pink text-white font-semibold rounded-xl hover:bg-opacity-90 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Обновить страницу
              </button>

              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-brand-pink hover:text-brand-pink transition-colors"
              >
                <Phone className="w-5 h-5" />
                Позвонить нам
              </a>
            </div>

            {/* Brand */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-lg font-bold text-gradient">
                {companyInfo.name}
              </p>
              <p className="text-sm text-gray-500">
                {companyInfo.phone}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
